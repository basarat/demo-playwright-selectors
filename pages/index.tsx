import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div style={{ padding: '10px' }}>
      <button className='primary' type='submit'>Submit</button>
      <br />
      <br />
      <button className='secondary' type='reset'>Reset</button>
    </div>
  );
}

export default Home;
