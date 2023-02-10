import React from "react";
import s from "./ProfileDescription.module.css";

function ProfileDescription() {

    return (
        <div>
            <div className={s.avatarBlock}>
                <img
                    src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-profile-glyph-black-icon-png-image_691589.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                Description
            </div>
        </div>
    );

}

export default ProfileDescription