import React from "react"
import { Link } from "gatsby"
import "twin.macro"
import Vote from "../components/vote"

export default function Tool({ tool }) {
  return (
    <div tw="my-3 flex border-b border-gray-200 pb-6">
      <div tw="flex-none w-12">
        <Vote sum={tool.children[0].sum} k={tool.children[0].key} />
      </div>

      <div tw="flex-auto pl-5">
        <Link to={tool.fields.slug} tw="pb-4">
          <h4 tw="font-bold text-xl mb-3">{tool.name}</h4>
        </Link>
        <p tw="text-gray-600 mb-3">{tool.description}</p>
        <div>
          <ul tw="list-none max-w-sm inline-block align-top">
            {tool.tags.map(tag => (
              <li tw="mb-2 mr-1 inline-block" key={tag}>
                <a href={"/tag/" + tag}>
                  <span tw="bg-gray-300 px-2 py-1 rounded">{tag}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
