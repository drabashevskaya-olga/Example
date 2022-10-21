import { BtnGroup, Thick } from "../../../../parts/button";
import FbSvg from "../../../../assets/auth/fb.svg";
import GglSvg from "../../../../assets/auth/google.svg";

export default function AuthSocial() {
  const apiEndpoint = "https://test.saitlabs.net";
  const googleAuthServerEndpoint = apiEndpoint + "/users/google";
  const facebookAuthServerEndpoint = apiEndpoint + "/users/facebook";

  return (
    <BtnGroup>
      <Thick
        className="px-4 py-3"
        variant="white"
        type="button"
        href={
          "https://www.facebook.com/v14.0/dialog/oauth?client_id=578412416983241&redirect_uri=" +
          facebookAuthServerEndpoint +
          "&state=hello&scope=email"
        }
      >
        <img src={FbSvg} width="17.5px" alt="facebook proprep" />
        Facebook
      </Thick>
      <Thick
        className="px-4 py-3"
        variant="white"
        type="button"
        href={
          "https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&client_id=1075507267959-bk0dt1vs0tgol3i17oe62a7eg083ji41.apps.googleusercontent.com&redirect_uri=" +
          googleAuthServerEndpoint +
          "&response_type=code"
        }
      >
        <img src={GglSvg} width="17.5px" alt="facebook proprep" />
        Google
      </Thick>
    </BtnGroup>
  );
}
