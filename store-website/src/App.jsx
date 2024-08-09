import Tile from "./Tile"

function App() {
return (
<div className="container">
  <div className="categories">
    <p>Electronic</p>
    <p>Sweets</p>
    <p>Food</p>
    <p>Drinks</p>
    <p>Alcohol</p>
  </div>
  <Tile 
  title="Snickers"
  description="40% sales if you buy two"
  />
</div>
)
}
export default App
