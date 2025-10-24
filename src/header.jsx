import SelectLabels from "./ui/dropdown.jsx";

const Header = () => {
    return (
        <div className="flex items-center">
            <div>
                <img src="src\assets\images\logo.svg" alt="" />
            </div>
            <SelectLabels/>
        </div>
    );
}

export default Header;