// REVIEWED

// DATA FETCHING IN A SERVER COMPONENT.
// The component is an async function. It awaits its data before the
// HTML leaves the server. No effect, no loading flag, no spinner.

type Post = { id: number; title: string };

// Stands in for a database or an external API. Any asynchronous I/O
// works here. Credentials and query logic would never reach the
// client bundle, because this code never ships to the browser.
const getPosts = async function getPosts(): Promise<Post[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const x = "my-secret-API-key";

  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

  return [
    { id: 1, title: "The component waits for its own data" },
    { id: 2, title: "The HTML arrives already filled" },
    { id: 3, title: "Identical fetch calls are memoized per render" },
  ];
};

// No request-time API is used, so the build pre-renders this page.
// The pattern is identical for dynamic pages, only the trigger
// changes.
const DataFetchingPage = async function DataFetchingPage() {
  const posts = await getPosts();

  return (
    <main>
      <h2 className="mb-5 text-lg font-semibold leading-none">
        09 Data fetching
      </h2>
      <p className="mb-5 text-sm">
        This page awaited its data on the server. View the page source: the list
        below is already in the HTML.
      </p>
      <ul className="list-disc px-5 text-sm">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default DataFetchingPage;
