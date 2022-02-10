# from django.core.exceptions import ValidationError
# from django.utils.translation import gettext_lazy as _
# from django.core.validators import MaxValueValidator
#
#
#
# class MaxSizeValidator(MaxValueValidator):
#     """Image validation for maximum size"""
#     message = _('Картинка не должна превышать размера %(limit_value)s MB.')
#
#     def __call__(self, value):
#         cleaned = self.clean(value.size)
#         params = {'limit_value': self.limit_value, 'show_value': cleaned, 'value': value}
#         if self.compare(cleaned, self.limit_value * 1024 * 1024):
#             raise ValidationError(self.message, code=self.code, params=params)



# image = models.ImageField(upload_to="images/%Y/%m/%d/", blank=True, null=True, verbose_name='картинка',
                             # validators=[MaxSizeValidator(1)])
# ==========================================================
# from django.utils.safestring import mark_safe

# class Action(...):
#     ....

#     def image_url(self):
#         if self.image and hasattr(self.image, 'url'):
#             return mark_safe(f'<img src="{self.image.url}" width="auto", height="100px">')