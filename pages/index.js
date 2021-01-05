import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps(){
  const allPostsData = getSortedPostsData()

  return{
    props:{
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return <Layout>
      <section>
        <h2>Pre-rendered Blog Posts</h2>
        <ul>
          {allPostsData.map(({id, date, title}) => (
            <li>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>    
}
