import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  dashbaordContainer: {
    width: "60%",
    background: "#F5F9F8",
    height: "95vh",
    marginTop: "22px",
    borderRadius: "35px",
    marginLeft: "16.5rem",
  },
  dashboardInnerContainer: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "1rem",
    paddingBottom: "1.5rem",
  },
  dashboardUserStuffs: {
    display: "flex",
    justifyContent: "space-between",
  },
  dashboardUserGreet: {
    display: "flex",
    flexDirection: "column",
  },
  dahsboardUserGreeting: {
    fontSize: "28px",
    fontWeight: 700,
    lineHeight: "41.02px",
    letterSpacing: "2%",
    paddingBottom: "4px",
  },
  dashboardWelcomeGreeting: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "21.09px",
    letterSpacing: "2%",
    color: "#aaa",
  },
  dashboardSearchItems: {
      display: 'flex',
      justifyContent: 'space-between'
  },
  dashboardDestinationSearchBox: {
    width: "280px",
    height: "42px",
    borderRadius: "20px",
    boxShadow: "0px 3px 10px 0px rgba(0, 0, 0, 0.09)",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    marginRight: '15px'
  },
  searchIcon: {
    marginLeft: "10px",
    fill: "#aaa",
  },
  dashboardSearchBox: {
    marginLeft: "15px",
    border: 'none',
    outline: 'none'
  },
  dahsboardNotification: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    boxShadow: "0px 3px 10px 0px rgba(0, 0, 0, 0.09)",
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
