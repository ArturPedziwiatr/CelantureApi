import fs from 'fs'

export function getFileAndRemove (path) {
  const file = fs.readFileSync(path)
  fs.unlink(path, (err) => {
    if (err) throw err
  })

  return file
}