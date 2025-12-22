import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white mt-8">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="font-semibold text-teal-700">StyleDecor</h3>
          <p className="text-sm">Contact: +8801XXXXXXXXX • support@styledcor.com</p>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} StyleDecor. All rights reserved.</p>
      </div>
    </footer>
  )
}
