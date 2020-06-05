import React, {useContext} from "react";
import Fruit from "./Fruit";
import UserObject from "../hooks/UserContext";

const Barn = () => {
    const {userFarm, _} = useContext(UserObject);

    return (
        <div className="barn">
            <div className="barn-title">Barn</div>
            <div className="barn-list">
                {userFarm.barn.map((item, key) =>
                    <Fruit
                        key={key}
                        id={key}
                        name={item.name}
                        sale={item.sale}
                        count={item.count}
                    />)
                }
            </div>
        </div>
    )
};

export default Barn;