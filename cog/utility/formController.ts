export const handleFirstname = (
  setFirstName: React.Dispatch < React.SetStateAction< string>>, 
  firstName: string, 
  value: string,
  seterrorFirstName: React.Dispatch < React.SetStateAction < string >> ,
  errorFirstName: string,
  setCheckFname: React.Dispatch < React.SetStateAction < boolean >> ,
  checkFname: boolean
) => {
  setFirstName(value);
  console.log("firstName", firstName);

  const regex = /^[a-zA-Z]*$/.test(value);
  if (!regex) {
    setFirstName(value);
    seterrorFirstName("only alphabet");
    setCheckFname(true);
  } else if (value.length === 0) {
    seterrorFirstName("required");
    setCheckFname(true);
    setFirstName(value);
  } else if (value.length >= 50) {
    seterrorFirstName("max 50");
    setCheckFname(true);
    setFirstName(value);
  } else {
    setFirstName(value);
    setCheckFname(false);
  }
};