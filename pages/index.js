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
    <div style={{ padding: '2rem' }}>
      <h1>Live Content</h1>
      {contentList.length > 0 ? (
        contentList.map((item) => (
          <div key={item.id} style={{ marginBottom: '2rem' }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))
      ) : (
        <p>No content found.</p>
      )}
    </div>
  );
}


