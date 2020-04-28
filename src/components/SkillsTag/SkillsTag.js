/* 
* SkillsTag Component. 
* A gray pill button showing text.
* Called from Portoflio and Experience components.
*/
import React from 'react';
import "./SkillsTag.css";
let SkillsTag = ({skill}) => {
    return (
        <div>
            <a className="tag f7 no-underline br-pill ph3 pv2 ma1 dib white bg-dark-gray">{skill}</a>
        </div>
    )
}
export default SkillsTag;
