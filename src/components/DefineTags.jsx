export default function DefineTags({ tags, onChange }) {

  return (
    <div className="flex gap-2 items-center cursor-pointer pb-1">
      <select 
      onChange={onChange} 
      name="tags" id="" 
      className="border-none outline-none focus:ring-0 min-w-[99px]">
        <option value="select" >Select</option>
        {
          tags.map(tag => (
            <option key={tag.id} value={tag.name}>
              {tag.value}
            </option>
          ))
        }
      </select>
    </div>
  )
}