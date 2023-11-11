import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-2xl font-bold mb-4">Connect with Us</p>

        <div className="flex space-x-4">
          <a  className="text-lg hover:underline">Facebook</a>
          <a  className="text-lg hover:underline">Twitter</a>
          <a  className="text-lg hover:underline">Instagram</a>
        </div>

        <p className="mt-4 text-lg">Address :  A-207 Yash Plaza , opp. Dhanamil, Varachha Road, Surat <br/></p>
        <p className="mt-4 text-lg">© 2023 MANISHA OFFSET. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
