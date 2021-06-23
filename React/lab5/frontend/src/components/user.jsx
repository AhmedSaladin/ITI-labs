export default function User({ info }) {
  return (
    <div
      className="alert border border-2 d-flex justify-content-between mx-auto "
      style={{ maxWidth: "700px" }}
    >
      <h2 className="align-self-center">{info.name}</h2>
      <img
        src="https://1.bp.blogspot.com/-6d14KwgLgrw/Xg5an-3Of1I/AAAAAAAABrk/CkUSzx33CmImNRuhJlH_KuxVH9urK8kjACLcBGAsYHQ/s1600/%25D8%25A7%25D9%2582%25D8%25AA%25D8%25A8%25D8%25A7%25D8%25B3%25D8%25A7%25D8%25AA%2B%25D9%2583%25D8%25B1%25D8%25AA%25D9%2588%25D9%2586.jpg"
        alt={info.name}
        className="w-25 rounded"
      />
    </div>
  );
}
