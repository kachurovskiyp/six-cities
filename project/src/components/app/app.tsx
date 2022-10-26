import Main from '../../pages/main/main';

type MainProps = {
  offerCount: number;
}

function App({offerCount}: MainProps): JSX.Element {
  return <Main offerCount={offerCount} />;
}

export default App;
