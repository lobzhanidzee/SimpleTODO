using SimpleTODO.Server.Data;
using SimpleTODO.Server.Models;
using SimpleTODO.Server.Services.Interfaces;

namespace SimpleTODO.Server.Services
{
    public class PostsService : IPostsService
    {
        private MyDataContext _dataContext;

        public PostsService(MyDataContext dataContext)
        {
            this._dataContext = dataContext;
        }

        public PostModel Create(PostModel model)
        {
            var lastPost = _dataContext.Posts.LastOrDefault();

            int newId = lastPost is null ? 1 : lastPost.Id + 1;

            model.Id = newId;
            this._dataContext.Posts.Add(model);

            return model;
        }
        public PostModel Update(PostModel model)
        {
            var modelToUpdate = this._dataContext.Posts.FirstOrDefault(x => x.Id == model.Id);

            ArgumentNullException.ThrowIfNull(modelToUpdate);

            modelToUpdate.Header = model.Header;
            modelToUpdate.Text = model.Text;

            return modelToUpdate;
        }

        public void Delete(int id)
        {
            var modelToDelete = this._dataContext.Posts.FirstOrDefault(x => x.Id == id);

            ArgumentNullException.ThrowIfNull(modelToDelete);

            this._dataContext.Posts.Remove(modelToDelete);
        }

        public PostModel Get(int id)
        {
            var modelToGet = this._dataContext.Posts.FirstOrDefault(x => x.Id == id);

            ArgumentNullException.ThrowIfNull(modelToGet);

            return modelToGet;
        }

        public List<PostModel> Get()
        {
            return this._dataContext.Posts;
        }
    }
}
