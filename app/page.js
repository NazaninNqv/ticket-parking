import React from 'react';
import './styles/style.scss';
import Link from "next/link";

const Page = () => {
    return (
        <div className={'mainCard'}>
            <div className={'navbar'}>
                <p className={'introduction'}>A Web page</p>
                <div className={'topBar'}>
                    <div className='sign'>
                        <Link className={'back'} href="#">
                            <img src="/svg/back.png" width="50" height="50" alt="logo" />
                        </Link>
                        <Link className={'next'} href="#">
                            <img src="/svg/next.png" width="50" height="50" alt="logo" />
                        </Link>
                        <Link className={'close'} href="#">
                            <img src="/svg/close.png" width="50" height="50" alt="logo" />
                        </Link>
                        <Link className={'home'} href="#">
                            <img src="/svg/home.png" width="50" height="50" alt="logo" />
                        </Link>
                    </div>
                    <div className={'search'}>
                        <input/>
                        <Link className={'logo'} href="#">
                            <img src="/svg/search.png" width="50" height="50" alt="logo" />
                        </Link>
                    </div>
                </div>
            </div>
          <h1>hi main page</h1>
        </div>
    );
};

export default Page;