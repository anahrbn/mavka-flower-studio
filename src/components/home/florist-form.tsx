'use client';

import { useState } from 'react';

const examples = ['An apology', 'An anniversary', 'Cheer up a friend'];

export function FloristForm() {
  const [request, setRequest] = useState('');

  return (
    <form
      className="mt-10 text-left"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label htmlFor="florist-request" className="block font-medium">
        Who is the bouquet for?
      </label>
      <textarea
        id="florist-request"
        name="request"
        rows={3}
        value={request}
        onChange={(event) => setRequest(event.target.value)}
        placeholder="My mom's birthday. She loves soft colors. Around $80."
        className="bg-cream text-deep-olive placeholder:text-moss-gray mt-2 w-full resize-y rounded-sm border border-white p-4"
      />

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <div
          role="group"
          aria-label="Example requests"
          className="flex flex-wrap gap-2"
        >
          {examples.map((example) => (
            <button
              key={example}
              type="button"
              onClick={() => setRequest(example)}
              className="hover:text-olive min-h-11 rounded-full border border-white px-4 text-[15px] hover:bg-white"
            >
              {example}
            </button>
          ))}
        </div>

        <button
          type="submit"
          className="bg-cream text-deep-olive h-13 rounded-sm px-7 font-medium tracking-wide hover:bg-white"
        >
          Suggest bouquets
        </button>
      </div>
    </form>
  );
}
