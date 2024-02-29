import { User } from "../routes/types.ts";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";

const Usuario: FunctionComponent<User> = (props) => {
  const { username, sex, address, name, email } = props;
  return (
    <div class="imgUser">
      <div class="textCentre">
        <p>
          <img src="https://static.vecteezy.com/system/resources/previews/020/911/737/non_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" />
        </p>
        <p>{name}</p>
        <hr class="hr" />
        <p>{email}</p>
        <p>{sex}</p>
        <p>{address}</p>
        <p>Username: {username}</p>
      </div>
    </div>
  );
};

export default Usuario;
