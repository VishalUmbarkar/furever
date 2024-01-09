import './Category.css'


// import Data
import { CategoryData } from '../../Data'

const Category = () => {
    const CategoryDataFetch = CategoryData.map((CategoryDataMain) => (
        <div className="col-lg-2" key={CategoryDataMain.id}>
            <div className="box">
                <img src={CategoryDataMain.CategoryImg} className='img-fluid' alt={CategoryDataMain.CategoryName} />
                <h6>{CategoryDataMain.CategoryName}</h6>
            </div>
        </div>
    ))
    return (
        <>
            <div className="row">
                {CategoryDataFetch}
            </div>
        </>
    )
}

export default Category