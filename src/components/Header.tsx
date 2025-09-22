function Header() {
  return (
    <header>
      <div className="flex">
        <div>
          <div>menu</div>
          <div>logo</div>
          <div>Ronald De Mesa</div>
        </div>
        <div>
          <div>search</div>
          <div className="hidden md:flex">
            <div>copilot</div>
            bar | before::
            <div>plus with dropdown</div>
            <div>issues</div>
            <div>PRs</div>
          </div>
          <div>inbox</div>
          <div>icon</div>
        </div>
      </div>
      <div>
        place overview, repositories, projects,packages, stars{" "}
        <div>
          create way to check width and create overflow button for other options
        </div>
      </div>
    </header>
  );
}

export default Header;
