import React from 'react';
import Layout from './components/Layout';
import NoteContainer from './components/NotesContainer';
import LoginModal from './components/LoginModal';

const App: React.VFC = () => {
  return (
    <Layout>
      <NoteContainer />
      <LoginModal />
    </Layout>
  );
}

export default App;