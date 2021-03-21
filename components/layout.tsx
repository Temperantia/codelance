import Header from './header';

const Layout = ({ children }: React.PropsWithChildren<{}>) => (
  <div className='bg-codelance-cream'>
    <Header></Header>
    <div>{children}</div>
  </div>
);

export default Layout;
