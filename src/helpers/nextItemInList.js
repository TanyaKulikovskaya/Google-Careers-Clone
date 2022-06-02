const nextItemInList = (list, value) => {
  const currentIndex = list.map((item) => item.value).indexOf(value)
  const nextIndex = (currentIndex + 1) % list.length
  return list[nextIndex]
}

export default nextItemInList
