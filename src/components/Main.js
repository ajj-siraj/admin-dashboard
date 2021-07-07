function Main() {
  return (
    <>
      <div className="flex bg-gray-100 p-14">
        {/* <Header /> */}
        header area
      </div>
      <div className="grid grid-cols-12">
        <div className="grid col-span-3 p-10 bg-pink-300">
          {/* <SideNav /> */}
          sidenav
        </div>
        <div className="grid col-span-9 p-10 bg-pink-400">
          {/* <Content /> */}
          content area
        </div>
      </div>
    </>
  );
}

export default Main;
