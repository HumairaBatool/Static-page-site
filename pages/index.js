import { supabase } from '../lib/supabase';

export async function getStaticProps() {
  const { data, error } = await supabase.from('content').select('*');

  return {
    props: {
      contentList: data || [],
    },
  };
}

export default function Home({ contentList }) {
  return (
<div className="min-h-screen bg-purple-50 py-10 px-4 sm:px-8 bg-purple-100">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
      Live Content
    </h1>
    {contentList.length > 0 ? (
      <div className="space-y-6">
        {contentList.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 transition hover:shadow-lg hover:border-2 hover:border-purple-400"
          >
            <h2 className="text-2xl font-semibold text-purple-800 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-500">No content found.</p>
    )}
  </div>
</div>

  );
}
