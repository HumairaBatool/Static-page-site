import { supabase } from '../lib/supabase';

export async function getStaticProps() {
  const { data, error } = await supabase.from('content').select('*');

  return {
    props: {
      contentList: data || [],
    },
    revalidate: 60, // Revalidate every 60s as a fallback
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


// // pages/index.js
// import React from 'react';

// export default function Home() {
//   return (
//     <div style={{ padding: '2rem', color: 'black', fontFamily: 'Arial' }}>
//       <h1>Hello Supabase!</h1>
//       <p>This is a basic static page that works.</p>
//     </div>
//   );
// }
