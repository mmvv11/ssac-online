const standard = function () {
  console.log(this);
};

const arrow = () => {
  console.log(this);
};

standard();
arrow();
