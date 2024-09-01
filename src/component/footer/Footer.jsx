import React from 'react';
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '/src/assets/images/logo.png';

const Footers = () => {
  return (
    <Footer className="w-full bg-grey" container style={{ marginTop: '90px' }}>
      <div className="w-full bg-grey" id="contact">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <a href="">
              <img src={logo} alt="" className="logo" />
            </a>
          </div>
          <div className="flex flex-wrap gap-8 sm:mt-4">
            <div className="flex-1 min-w-[200px]">
              <Footer.Title title="Layanan Informasi Pengguna" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Email : cs@padiumkm.id</Footer.Link>
                <Footer.Link href="#">Whatsapp : +62 812 9000 7820</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div className="flex-1 min-w-[200px]">
              <Footer.Title title="Kantor Kami" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Gedung Telkom Direktorat Business & Technology
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Hacker Task Day 2" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footers;
