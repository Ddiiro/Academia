function Navbar() {
  return (
    <div className="flex gap-32 w-full">

        <div className="w-14 flex-none">
            <image/>
            <h1>Academia</h1>
        </div>

        <div className="w-64 flex-auto">
            <a href="/">Home</a>
            <a href="/about">Report Cards</a>
            <a href="/contact">Decipline</a>
        </div>
        <div className="w-32 flex-auto">
                <a href="/login"><button>Login</button></a>
                <a href="/signup"><button>Signup</button></a>
        </div>
    </div>
  )
}

export default Navbar