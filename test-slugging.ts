const slug = (name: string) => name.toLowerCase().replace(" ", "-");

const unslug = (name: string) => {
  const parts = name.split(" ");

  return parts
    .map((part: string) => part[0].toUpperCase() + part.substring(1))
    .join(" ");
};

  const cname = (channelName: string, name: string) => {
    if (!channelName.startsWith("dm")) return channelName;

    const myName = slug(name);
    const otherName = channelName
      .replace(myName, "")
      .replace("dm-", "")
      .replace(/-/g, " ")
      .trim();

    return unslug(otherName) + " (Private)";
  };

  console.log('dm-julian-nicholls-leon-tatlock =>', cname('dm-julian-nicholls-leon-tatlock', 'Julian Nicholls'));
  console.log('dm-julian-nicholls-leon-tatlock =>', cname('dm-julian-nicholls-leon-tatlock', 'Leon Tatlock'));
  console.log('julian-nicholls-leon-tatlock =>', cname('julian-nicholls-leon-tatlock', 'Leon Tatlock'));
