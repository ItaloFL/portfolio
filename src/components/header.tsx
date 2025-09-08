import { Moon, Sun } from '@phosphor-icons/react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/themeProvider'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import {
  BookOpenCheck,
  ChevronDown,
  Contact,
  FolderOpenDot
} from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between w-full max-w-5xl py-8 transition-colors px-10">
      <Link to={'/'} className="logo">
        <svg
          width="435"
          height="289"
          viewBox="0 0 435 289"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[60px] h-[60px] text-black dark:text-white"
        >
          <path
            d="M29.9039 288.651C24.0039 287.551 17.6539 284.401 12.6539 280.151C8.95388 277.001 4.40389 270.501 2.85389 266.151C0.353895 258.951 0.403883 260.501 0.403883 189.051C0.403883 124.951 0.453883 122.001 1.40388 117.501C4.20388 103.951 13.2539 94.1509 26.9039 89.9009C31.8039 88.3509 42.8039 88.2009 47.9039 89.6009C60.9039 93.2009 71.3039 103.701 74.2539 116.301C75.1039 120.001 75.1539 124.151 75.1539 189.451C75.1539 267.301 75.4539 261.001 71.3039 269.351C67.8539 276.401 60.3539 283.401 53.4039 286.151C48.0039 288.301 46.6039 288.551 38.9039 288.701C34.6539 288.801 30.6039 288.751 29.9039 288.651Z"
            fill="currentColor"
          />
          <path
            d="M120.054 288.001C115.254 286.801 110.654 284.501 106.554 281.201C98.4038 274.701 93.8538 265.601 93.7038 255.701L93.6538 250.701L96.8538 243.201C98.5538 239.101 103.804 226.151 108.404 214.451C123.704 175.751 131.304 158.751 137.054 150.451C139.504 146.951 139.804 146.701 141.654 146.551C143.604 146.401 143.804 146.551 147.454 150.551C153.804 157.551 161.354 166.251 168.254 174.651C174.104 181.751 174.854 182.901 174.904 184.551V186.401L170.804 186.551L166.654 186.701L166.404 223.701C166.104 264.801 166.254 262.451 162.604 269.951C160.104 275.001 153.204 281.951 148.154 284.551C142.004 287.701 138.504 288.551 130.654 288.751C125.054 288.901 122.904 288.751 120.054 288.001Z"
            fill="currentColor"
          />
          <path
            d="M309.054 287.151C300.954 285.401 292.754 281.651 286.354 276.851C274.904 268.251 267.204 255.851 263.804 240.701C262.904 236.801 262.754 233.901 262.554 219.101C262.354 205.001 262.404 201.901 263.004 201.751C266.504 200.651 280.654 195.151 286.404 192.601C302.754 185.351 323.704 173.051 331.454 166.101C333.154 164.551 334.254 163.951 335.354 163.951H336.904L337.004 188.601L337.154 213.201L371.904 213.451C406.104 213.701 406.704 213.751 409.554 214.801C415.554 217.101 419.554 219.601 423.704 223.701C431.804 231.701 434.804 240.001 434.254 252.651C433.804 263.201 430.854 270.001 423.404 277.501C418.504 282.401 413.504 285.251 406.704 286.951C402.904 287.901 401.154 287.951 357.454 287.901C321.154 287.851 311.554 287.701 309.054 287.151Z"
            fill="currentColor"
          />
          <path
            d="M93.4037 119.501C93.4037 29.4008 93.2537 33.8009 96.1537 26.1509C99.5037 17.2509 106.654 9.05086 114.654 4.85086C117.154 3.55086 120.854 2.00086 122.904 1.35086L126.654 0.200862L170.654 0.0508678C219.954 -0.0991322 219.104 -0.149126 226.654 3.40087C236.704 8.15087 243.804 16.5508 246.404 26.7508C247.804 32.1508 247.804 42.2509 246.404 47.7009C244.154 56.4009 238.604 64.0509 231.254 68.6509C222.404 74.1509 220.154 74.4509 190.354 74.4509H166.404V93.4509V112.451L172.554 112.501C175.904 112.551 187.304 112.601 197.904 112.651C215.004 112.701 217.504 112.801 220.404 113.601C230.854 116.551 238.904 122.951 243.654 132.051C246.354 137.151 247.404 142.001 247.404 149.251C247.404 156.951 246.504 161.501 243.804 166.951C240.954 172.751 234.004 179.851 228.354 182.601C221.704 185.851 218.254 186.451 206.204 186.451L195.654 186.401L191.904 181.301C188.354 176.451 186.254 173.751 177.154 162.201C166.304 148.501 153.004 134.001 149.654 132.351C143.354 129.151 136.104 130.501 130.354 135.801C124.654 141.101 115.804 156.151 108.454 173.151C104.804 181.551 97.5537 199.501 97.1537 201.101C96.8537 202.251 96.5037 202.451 95.1037 202.451H93.4037V119.501Z"
            fill="currentColor"
          />
          <path
            d="M262.504 92.1009L262.654 0.200928L279.904 0.250916H297.154L301.604 1.60092C321.704 7.80092 334.454 22.5509 336.904 42.4509C337.204 45.1009 337.404 64.2009 337.404 93.3509V140.051L333.804 143.851C326.854 151.051 311.954 161.851 299.404 168.751C285.804 176.251 268.104 183.951 264.504 183.951H262.404L262.504 92.1009Z"
            fill="currentColor"
          />
          <path
            d="M28.4038 75.7009C22.8538 74.4509 16.3538 70.9009 11.8538 66.6009C3.1538 58.2509 -0.496219 48.8509 0.0537814 36.2509C0.353781 29.2009 1.20379 25.7009 3.90379 20.2009C8.50379 10.9009 16.5538 4.20088 26.6538 1.40088C29.9038 0.500879 31.9538 0.300854 37.6538 0.250854C45.9038 0.250854 50.2038 1.25086 56.6538 4.60086C62.3038 7.55086 68.9038 14.2009 71.7538 19.7009C74.8038 25.6009 75.4538 28.3009 75.7538 35.9509C76.1038 44.2509 75.2038 49.3009 72.4538 55.2009C67.8038 65.0009 59.2038 72.4009 49.1038 75.2509C45.0038 76.4009 32.7538 76.6509 28.4038 75.7009Z"
            fill="currentColor"
          />
        </svg>
      </Link>

      <ul className="hidden md:flex gap-10 font-semibold bg-contrast-color border transition-colors border-border-color text-primary-color p-3 px-5 rounded-full dark:bg-contrast-color-dark dark:border-border-color-dark dark:text-primary-color-dark">
        <Link
          to={'about'}
          className={`cursor-pointer transition-colors hover:text-link-hover-color ${
            location.pathname.includes('about') ? 'text-link-hover-color' : ''
          }`}
        >
          Sobre
        </Link>

        <Link
          to={'projects'}
          className={`cursor-pointer transition-colors hover:text-link-hover-color ${
            location.pathname.includes('projects')
              ? 'text-link-hover-color'
              : ''
          }`}
        >
          Projetos
        </Link>
        <Link
          to={'contact'}
          className={`cursor-pointer transition-colors hover:text-link-hover-color ${
            location.pathname.includes('contact') ? 'text-link-hover-color' : ''
          }`}
        >
          Contato
        </Link>
      </ul>

      <div className="flex gap-10">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger
            onClick={() => setOpen(true)}
            className="md:hidden text-base uppercase flex items-center rounded-full px-4 py-2 border text-primary-color border-border-color bg-contrast-color transition-colors dark:bg-contrast-color-dark dark:border-border-color-dark dark:text-primary-color-dark dark:hover:bg-[#212121]"
          >
            <p>Menu</p>
            <ChevronDown />
          </DialogTrigger>
          <DialogContent className="text-primary-color fixed top-56 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[90vw] max-h-[80vh] overflow-y-auto p-6 bg-[#f9f9f9] border-0 rounded-md dark:bg-[#0f0f0f] dark:text-primary-color-dark">
            <ul className="flex flex-col my-10 gap-12 text-base font-semibold text-primary-color dark:text-primary-color-dark">
              <Link
                to={'/about'}
                onClick={() => setOpen(false)}
                className=" flex items-center gap-5 cursor-pointer transition-colors hover:text-link-hover-color"
              >
                <div className=" dark:bg-contrast-color-dark dark:border-border-color-dark p-2 rounded-md">
                  <BookOpenCheck
                    size={22}
                    className="text-[#000000] dark:text-[#FFFFFF]"
                  />
                </div>
                <div>
                  <p>Sobre</p>
                  <p className="text-xs text-second-color">
                    Saiba um pouco mais sobre mim
                  </p>
                </div>
              </Link>
              <Link
                to={'projects'}
                onClick={() => setOpen(false)}
                className=" flex items-center gap-5 cursor-pointer transition-colors hover:text-link-hover-color"
              >
                <div className="bg-contrast-color border border-border-color dark:bg-contrast-color-dark dark:border-border-color-dark p-2 rounded-md">
                  <FolderOpenDot
                    size={22}
                    className="text-[#000000] dark:text-[#FFFFFF]"
                  />
                </div>
                <div>
                  <p>Projetos</p>
                  <p className="text-xs text-second-color">
                    Projetos desenvolvidos para aprendizado
                  </p>
                </div>
              </Link>
              <Link
                to={'contact'}
                onClick={() => setOpen(false)}
                className=" flex items-center gap-5 cursor-pointer transition-colors hover:text-link-hover-color"
              >
                <div className=" dark:bg-contrast-color-dark dark:border-border-color-dark p-2 rounded-md">
                  <Contact
                    size={22}
                    className="text-[#000000] dark:text-[#FFFFFF]"
                  />
                </div>
                <div>
                  <p>Contato</p>
                  <p className="text-xs text-second-color">
                    Entre em contato e vamos evoluir juntos
                  </p>
                </div>
              </Link>
            </ul>
          </DialogContent>
        </Dialog>

        <button
          onClick={toggleTheme}
          className=" p-2 rounded-full hover:bg-[#C8C8C8] transition-colors dark:bg-contrast-color-dark dark:border-border-color-dark dark:hover:bg-[#212121]"
        >
          {theme === 'dark' ? (
            <Sun
              size={25}
              className="text-primary-color dark:text-primary-color-dark"
            />
          ) : (
            <Moon
              size={25}
              className="text-primary-color dark:text-primary-color-dark"
            />
          )}
        </button>
      </div>
    </header>
  )
}
