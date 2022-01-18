import React from 'react';
import Layout from './components/Layout';
import NoteContainer from './components/NotesContainer';
import LoginModal from './components/LoginModal';
import Loading from './components/Common/Loading';

const App: React.VFC = () => {
  return (
    <Layout>
      <NoteContainer />
      <LoginModal />
      <Loading />
    </Layout>
  );
}

export default App;