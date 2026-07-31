// REVIEWED

import Link from "next/link";
import { PropsWithChildren } from "react";

export default function PCXLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/pcx">Home</Link>
              </li>
              <li>
                <Link href="/pcx/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
