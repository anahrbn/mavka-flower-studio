import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { QuantityStepper } from './quantity-stepper';

describe('QuantityStepper', () => {
  it('increases the value', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<QuantityStepper value={1} onChange={onChange} />);

    await user.click(screen.getByRole('button', { name: 'Increase quantity' }));

    expect(onChange).toHaveBeenCalledWith(2);
  });

  it('decreases the value', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<QuantityStepper value={3} onChange={onChange} />);

    await user.click(screen.getByRole('button', { name: 'Decrease quantity' }));

    expect(onChange).toHaveBeenCalledWith(2);
  });

  it('does not go below the minimum and keeps focus', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<QuantityStepper value={1} onChange={onChange} />);
    const decrease = screen.getByRole('button', { name: 'Decrease quantity' });

    await user.click(decrease);

    expect(onChange).not.toHaveBeenCalled();
    expect(decrease).toHaveAttribute('aria-disabled', 'true');
    expect(decrease).toHaveFocus();
  });

  it('does not go above the maximum', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<QuantityStepper value={10} onChange={onChange} />);

    await user.click(screen.getByRole('button', { name: 'Increase quantity' }));

    expect(onChange).not.toHaveBeenCalled();
  });

  it('works with the keyboard', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<QuantityStepper value={1} onChange={onChange} />);

    await user.tab();
    await user.tab();
    await user.keyboard('{Enter}');

    expect(onChange).toHaveBeenCalledWith(2);
  });
});
