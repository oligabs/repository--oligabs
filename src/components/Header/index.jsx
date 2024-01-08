import { HeaderControls } from "./HeaderControls";
import { HeaderInfo } from "./HeaderInfo";

export const Header = () => {
  return (
    <header>
      <div className="topHeader">
        <div>
          <h3>Gabriela Lemos Melo</h3>
          <HeaderControls />
          <HeaderInfo />
        </div>
      </div>
    </header>
  );
};
