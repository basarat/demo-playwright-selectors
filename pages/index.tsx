import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div style={{ padding: '10px' }}>
      <button data-test="submit" className='primary' type='submit'>Submit</button> <button className='secondary' type='reset'>Reset</button>
    </div>
  );
}

export default Home;
