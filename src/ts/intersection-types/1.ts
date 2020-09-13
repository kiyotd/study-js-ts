type Engineer = {
  name: string;
  role: string;
};
type Blogger = {
  name: string;
  follower: number;
};
type EngineerBlogger = Engineer & Blogger;

const quill: EngineerBlogger = {
  name: "quill",
  role: "front-end",
  follower: 1000,
};

type tmp = string & number; //never型

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber; //number型
