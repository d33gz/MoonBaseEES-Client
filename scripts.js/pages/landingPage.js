const contentBox = document.getElementById("content-box");

loadPage = () => {
  contentBox.innerHTML = (
    <><div id="landing-box">
      <h1>Moon Base</h1>
      <h2>Employee Expense System</h2>
    </div><button name="enter" type="submit">Login</button></>
  )
};

loadPage();