import React from "react";
import { ReactComponent as JsImage } from "../img/brand-javascript.svg";
import { ReactComponent as ReactImage } from "../img/brand-react.svg";
import { ReactComponent as DataBaseImage } from "../img/database.svg";
import { ReactComponent as PythonImage } from "../img/brand-python.svg";
import LineSkill from "./LineSkill";

export default function Skills() {
  return (
    <React.Fragment>
      <div id="_skills" style={{ margin: "1rem", color: "white" }}>
        <ul>
          <li>
            <LineSkill
              image={<JsImage style={{ width: "3em" }} />}
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit est harum suscipit hic. Eaque voluptatum, aliquid molestiae iure tempore sed consectetur repudiandae alias commodi at odit asperiores deleniti atque odio! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia neque ea quos natus. Totam, quaerat? Quasi odio fugiat magnam quas debitis reprehenderit, assumenda eum, commodi nam illum velit, rem corrupti! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit est harum suscipit hic. Eaque voluptatum, aliquid molestiae iure tempore sed consectetur repudiandae alias commodi at odit asperiores deleniti atque odio! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia neque ea quos natus. Totam, quaerat? Quasi odio fugiat magnam quas debitis reprehenderit, assumenda eum, commodi nam illum velit, rem corru"
              title="JavaScript"
            />
          </li>
          <li>
            <LineSkill
              image={<ReactImage style={{ width: "3em" }} />}
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit est harum suscipit hic. Eaque voluptatum, aliquid molestiae iure tempore sed consectetur repudiandae alias commodi at odit asperiores deleniti atque odio! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia neque ea quos natus. Totam, quaerat? Quasi odio fugiat magnam quas debitis reprehenderit, assumenda eum, commodi nam illum velit, rem corrupti! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit est harum suscipit hic. Eaque voluptatum, aliquid molestiae iure tempore sed consectetur repudiandae alias commodi at odit asperiores deleniti atque odio! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia neque ea quos natus. Totam, quaerat? Quasi odio fugiat magnam quas debitis reprehenderit, assumenda eum, commodi nam illum velit, rem corru"
              title="React"
            />
          </li>
          <li>
            <LineSkill
              image={<DataBaseImage style={{ width: "3em" }} />}
              title="PostgresSQL"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit est harum suscipit hic. Eaque voluptatum, aliquid molestiae iure tempore sed consectetur repudiandae alias commodi at odit asperiores deleniti atque odio! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia neque ea quos natus. Totam, quaerat? Quasi odio fugiat magnam quas debitis reprehenderit, assumenda eum, commodi nam illum velit, rem corrupti! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit est harum suscipit hic. Eaque voluptatum, aliquid molestiae iure tempore sed consectetur repudiandae alias commodi at odit asperiores deleniti atque odio! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia neque ea quos natus. Totam, quaerat? Quasi odio fugiat magnam quas debitis reprehenderit, assumenda eum, commodi nam illum velit, rem corru"
            />
          </li>
          <li>
            <LineSkill
              image={<PythonImage style={{ width: "3em" }} />}
              title="Python"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit est harum suscipit hic. Eaque voluptatum, aliquid molestiae iure tempore sed consectetur repudiandae alias commodi at odit asperiores deleniti atque odio! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia neque ea quos natus. Totam, quaerat? Quasi odio fugiat magnam quas debitis reprehenderit, assumenda eum, commodi nam illum velit, rem corrupti! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit est harum suscipit hic. Eaque voluptatum, aliquid molestiae iure tempore sed consectetur repudiandae alias commodi at odit asperiores deleniti atque odio! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia neque ea quos natus. Totam, quaerat? Quasi odio fugiat magnam quas debitis reprehenderit, assumenda eum, commodi nam illum velit, rem corru"
            />
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
