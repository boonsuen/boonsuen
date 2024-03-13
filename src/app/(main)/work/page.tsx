import { Button } from '@/components/ui/Button';

export default function WorkPage() {
  return (
    <main className="min-h-screen layout-container">
      <h1 className="my-10 font-serif text-[clamp(3rem,15cqi,4.5rem)] [line-height:1.1cap] tracking-[-0.025em]">
        Work
      </h1>
      <hr className="border-main/20" />
      <p className="uppercase mt-6 mb-12 text-[15px]">
        Some of the personal projects I've made.
      </p>

      <div className="layout-grid-container">
        <div className="col-[1_/_7] my-12">
          <h2 className="text-2xl mb-3">Process Scheduling Solver</h2>
          <p className="text-[15px] mb-4">
            Generate gantt chart and calculation for CPU scheduling algorithms.
          </p>
          <div className="flex">
            <Button
              href="https://process-scheduling-solver.boonsuen.com"
              isExternal
              className="px-5"
            >
              Open
            </Button>
          </div>
          <div className="border-t border-t-main/20 pt-4 mt-8 lg:w-1/2">
            <p>
              <span className="text-sm text-main/60 mr-1">YEAR</span>
              <span className="text-sm text-main">2021</span>
            </p>
            <p>
              <span className="text-sm text-main/60 mr-1">STARS</span>
              <span className="text-sm text-main">200+</span>
            </p>
            <ul className="uppercase text-xs flex gap-4 mt-5">
              <li className="bg-main/5 rounded-full px-[10px] py-[6px]">
                Next.js
              </li>
              <li className="bg-main/5 rounded-full px-[10px] py-[6px]">
                Algorithm
              </li>
              <li className="bg-main/5 rounded-full px-[10px] py-[6px]">
                Operating System
              </li>
            </ul>
          </div>
        </div>

        <div className="col-[1_/_7] my-12">
          <h2 className="text-2xl mb-3">ObjectDB</h2>
          <p className="text-[15px] mb-4">
            Embedded document-oriented database for Go.
          </p>
          <div className="flex">
            <Button
              href="https://github.com/boonsuen/objectdb"
              isExternal
              className="px-5"
            >
              Open
            </Button>
          </div>
          <div className="border-t border-t-main/20 pt-4 mt-8 lg:w-1/2">
            <p>
              <span className="text-sm text-main/60 mr-1">YEAR</span>
              <span className="text-sm text-main">2024</span>
            </p>
            <ul className="uppercase text-xs flex gap-4 mt-5">
              <li className="bg-main/5 rounded-full px-[10px] py-[6px]">
                Golang
              </li>
              <li className="bg-main/5 rounded-full px-[10px] py-[6px]">
                Database
              </li>
              <li className="bg-main/5 rounded-full px-[10px] py-[6px]">
                NOSQL
              </li>
            </ul>
          </div>
        </div>

        <div className="col-[1_/_7] my-12">
          <h2 className="text-2xl mb-3">Hodler</h2>
          <p className="text-[15px] mb-4">A simple crypto price viewer.</p>
          <div className="flex">
            <Button
              href="https://hodler.boonsuen.com"
              isExternal
              className="px-5"
            >
              Open
            </Button>
          </div>
          <div className="border-t border-t-main/20 pt-4 mt-8 lg:w-1/2">
            <p>
              <span className="text-sm text-main/60 mr-1">YEAR</span>
              <span className="text-sm text-main">2018</span>
            </p>
            <ul className="uppercase text-xs flex gap-4 mt-5">
              <li className="bg-main/5 rounded-full px-[10px] py-[6px]">
                Next.js
              </li>
            </ul>
          </div>
        </div>

        <div className="col-[1_/_7] my-12 mb-24">
          <h2 className="text-2xl mb-3">ticTacToe</h2>
          <p className="text-[15px] mb-4">Play against an algorithm.</p>
          <div className="flex">
            <Button
              href="https://tictactoe.boonsuen.com"
              isExternal
              className="px-5"
            >
              Open
            </Button>
          </div>
          <div className="border-t border-t-main/20 pt-4 mt-8 lg:w-1/2">
            <p>
              <span className="text-sm text-main/60 mr-1">YEAR</span>
              <span className="text-sm text-main">2020</span>
            </p>
            <ul className="uppercase text-xs flex gap-4 mt-5">
              <li className="bg-main/5 rounded-full px-[10px] py-[6px]">
                Next.js
              </li>
              <li className="bg-main/5 rounded-full px-[10px] py-[6px]">
                Algorithm
              </li>
            </ul>
          </div>
        </div>

        <div className="col-[1_/_7] my-12 mb-24">
          <h2 className="text-2xl mb-3">Boonsuen.com 2020</h2>
          <p className="text-[15px] mb-4">Personal website - 2020 Version</p>
          <div className="flex">
            <Button href="https://v1.boonsuen.com" isExternal className="px-5">
              Open
            </Button>
          </div>
          <div className="border-t border-t-main/20 pt-4 mt-8 lg:w-1/2">
            <p>
              <span className="text-sm text-main/60 mr-1">YEAR</span>
              <span className="text-sm text-main">2020</span>
            </p>
            <ul className="uppercase text-xs flex gap-4 mt-5">
              <li className="bg-main/5 rounded-full px-[10px] py-[6px]">
                Next.js
              </li>
              <li className="bg-main/5 rounded-full px-[10px] py-[6px]">
                styled-components
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
