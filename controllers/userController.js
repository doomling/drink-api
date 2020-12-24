class UserController {
  constructor(userService, drinkService) {
    this.userService = userService;
    this.drinkService = drinkService;
  }

  async getUserByName(req, res) {
    const { name } = req.params;
    console.log(req.params);

    const user = await this.userService.getUserByName(name);
    const drink = await this.drinkService.getDrinkByName(user.favDrink);

    console.log(user, "controller");
    console.log(drink);

    const data = {
      name: user.name,
      favDrink: user.favDrink,
      main: drink.mainIngredient,
    };

    res.json(data);
  }
}

module.exports = UserController;
