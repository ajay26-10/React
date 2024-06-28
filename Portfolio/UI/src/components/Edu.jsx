import React from 'react'

const Edu = () => {
  return (
    <>
        <div id="edu" class="w-[70%] m-4 mt-[50px]">
        <p class="text-3xl font-bold">EDUCATION</p>
        
        <table class="table-auto text-center border border-black w-[100%] text-xl mt-6">
            <thead>
              <tr class="h-[40px]">
                <th class="border border-black">Level</th>
                <th class="border border-black">Board/University</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr class="h-[40px]">
                <td class="border border-black">10TH</td>
                <td class="border border-black">CBSE</td>
                <td class="border border-black">2010</td>
              </tr>
              <tr class="h-[40px]">
                <td class="border border-black">12TH</td>
                <td class="border border-black">CBSE</td>
                <td class="border border-black">2012</td>
              </tr>
              <tr class="h-[40px]">
                <td class="border border-black">B.TECH</td>
                <td class="border border-black">NATIONAL INSTITUTE OF TECHNOLOGY CALICUT</td>
                <td class="border border-black">2017</td>
              </tr>
              <tr class="h-[40px]">
                <td class="border border-black">PG DIPLOMA</td>
                <td class="border border-black">KERALA BLOCKCHAIN ACADEMY</td>
                <td>2024</td>
              </tr>
            </tbody>
          </table>
    </div>
    </>
  )
}

export default Edu