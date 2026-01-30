const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
      <input type="text" placeholder="Enter your name" className="p-4 m-4 border border-black"></input>
      <input type="email" placeholder="Enter your email" className="p-4 m-4 border border-black"  ></input>
      <button className="border border-black p-4 m-4 bg-blue-300">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
