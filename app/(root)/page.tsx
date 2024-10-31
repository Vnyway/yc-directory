import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

//SearchParams

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Ilon" },
      _id: 1,
      description: "This is  description...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWUz9ahrsNQz1gySB_Ie7MI4ozs1S1PiHsw&s",
      category: "Robots",
      title: "We Robots",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Satrtup, <br /> Connect With Entrepreneurs
        </h1>
        {/* overwride tlwndcss predefined styles */}
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 &&
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?.id} post={post} />
            ))}
        </ul>
      </section>
    </>
  );
}
