from django.db import models
from django.contrib.auth.models import User
from catalog.models import Game

# Create your models here.

class ShoppingCart(models.Model):
    user = models.ForeignKey(
        User, 
        related_name='carts', 
        on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Shopping Cart"
        verbose_name_plural = "Shopping Carts"

class CartItem(models.Model): 
    cart = models.ForeignKey(
        ShoppingCart, 
        related_name='items', 
        on_delete=models.CASCADE
    )
    game = models.ForeignKey(
        Game, 
        related_name='cart_items', 
        on_delete=models.CASCADE
    )
    quantity = models.PositiveIntegerField(default=1)
    added_at = models.DateTimeField(auto_now_add=True)
    price_at_addition = models.DecimalField(
        max_digits=10, 
        decimal_places=2
    )

    def total_price(self):
        return self.quantity * self.price_at_addition

    class Meta:
        unique_together = ['cart', 'game']  # Evita duplicados en el carrito