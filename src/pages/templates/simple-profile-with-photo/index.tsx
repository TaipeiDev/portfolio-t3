import React from "react";
import ProfilePhoto from "./ProfilePlaceholderPhoto.png";
import SimpleProfileWithPhotoTemplate from "../../../templates/intros/SimpleProfileWithPhoto/SimpleProfileWithPhotoTemplate";

const content = {
  name: `<Dev's Name>`,
  profilePhoto: ProfilePhoto,
  title: `<Dev's Title>`,
  cta: {
    label: "Call to Action!",
    url: "#",
  },
  socialMedia: {
    github: "#",
    dribbble: "#",
    twitter: "#",
    email: "#",
  },
  header: (
    <div>
      {`Dev's`} <span className="text-purple-600">awesome</span> motto!
    </div>
  ),
  description: (
    <div className="font-light">
      <span>{`Ut enim `}</span> Lorem ipsum dolor
      <span className="font-semibold  text-pink-500"> voluptate velit</span>.
      sunt in culpa qui officia deserunt
      <span className="px-1  font-semibold text-pink-500">
        sit amet, consectetur adipiscing elit
      </span>
      , sed do eiusmod tempor incididunt
    </div>
  ),
};

function SimpleProfileWithPhoto() {
  return (
    <div className="container mx-auto w-full max-w-7xl">
      <div className="">docs</div>
      <div className="">
        <SimpleProfileWithPhotoTemplate {...content} />
      </div>
    </div>
  );
}

export default SimpleProfileWithPhoto;
