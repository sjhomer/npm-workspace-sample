# Micro-frontends with NPM Workspaces

With a small amount of code within the [package.json](package.json), and npm v7+, workspaces can be used to organize your code in some convenient ways.

[https://docs.npmjs.com/cli/v7/using-npm/workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)

```json
{
  "workspaces": [
    "./components/*",
    "./lib/*"
  ]
}
```

## 🙌🏻 Benefits
 
✅ Promotes planning and designing components and libraries in a micro-frontends mindset at all times
> Domain specific components, libraries, and other relatable code can be their own unique workspace. With linters, you can ensure they always specific their internal dependencies. This allows isolation and portability of code, as parts of the codebase may start in a monorepo and then be migrated to a package, with minimal impact on the rest of the codebase.

✅ IDE support can easily auto-complete the dependencies
> The JetBrains IDEs support auto-completion for NPM workspaces out of the box, and other IDEs can be made to support this. Even when you have same named components across multiple workspaces, as seen in [components/post/Post.jsx](components/post/Post.jsx) displaying an Avatar from both the organizer and user packages, the IDE still knows the difference in your first attempted use on which you may wish to leverage.

✅ You can safely self reference dependencies within a dependency, which allows greater portability
> Within [components/user/UserProfile.jsx](components/user/UserProfile.jsx), while it's in the `user` package at the moment, if it was meaningful to move it to a `layout` package later, it could be done safely, because the user Avatar is referenced as a package dependency, and not a relative dependency. At any point you see the advantage to move a package to a new repo, this also can be done safely with limited effort.

✅ Executing scripts across all or specific workspaces is handy
> If you had common scripts you wish to execute within each workspace, you could use a `scripts` section of their package.json. Running `npm run test --workspaces` would then in sequential order execute the scripts in each workspace. While you could still have a global script at the root package, this keeps things isolated yet still easy to execute should you decide to move it to its own repo.

## ⏸ Considerations

Requires discipline and dedication to be effective.
> This approach requires at all times developers are being very considerate and leads to keep a close eye on the codebase to ensure that the micro-frontends are being handled with care. Exposing the correct elements while keeping internal ones hidden, using the correct auto-complete imports against the packages vs relative pathing, placing new supporting components/utils in most ideal packages, etc.

Overhead or over complicating the codebase
> The other side effect of this approach, if used in an extreme way it can introduce a lot of overhead to the codebase, as you try to manage each micro-frontend correctly with proper dependencies and scripts to work in full isolation. Having workspaces all over the codebase too without clearly defined structure could make it hard to find the right elements developers can make use of or lead to confusion with isolated but same named components.

## Thoughts

Personally, for any personal efforts I work on moving forward I will always make use of workspaces, as I find them quite freeing. Testing it for a private monorepo @types package I was able to define types for the project in isolation, and include it via `"types": ["@types/local"],` in the tsconfig to infer automatically.

We successfully make use of these as well in an enterprise Gatsby project, but we kept the domain depth to whole things vs individual components (i.e. web/components, web/layout, web/store, lib/hooks, lib/utils, lib/grpahql, etc.), which was effective to the project needs.

With the right level of guidance, it is possible to make use of workspaces in a way that is more appropriate, where you know you must execute some work 'today', but know you desire to abstract some elements in the near future to allow support across more projects form the efforts.