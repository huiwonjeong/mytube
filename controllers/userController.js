import routes from "../routes";

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    //To do: register User
    //To do: log user in
    res.redirect(routes.home);
  }
};

export const users = (req, res) => res.render("Users", { pageTitle: "Users" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });

export const logout = (req, res) => {
  //To Do: Process Log Out
  res.redirect(routes.home);
};
